import { Resend } from 'resend'
import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: Request) {
  try {
    const { name, email, phone, company, message } = await req.json()

    const { error: dbError } = await supabase
      .from('leads')
      .insert([{ name, email, phone, company, message }])

    if (dbError) throw dbError

    await resend.emails.send({
      from: 'formularz@automaly.pl',
      to: process.env.RESEND_TO_EMAIL!,
      subject: `Nowe zapytanie od ${name}`,
      html: `
        <h2>Nowe zapytanie z formularza</h2>
        <p><strong>Imię:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Firma:</strong> ${company}</p>
        <p><strong>Wiadomość:</strong> ${message}</p>
      `
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Błąd serwera' }, { status: 500 })
  }
}
