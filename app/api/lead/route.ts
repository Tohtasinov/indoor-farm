import { NextResponse } from "next/server"

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
}

function esc(s: string) {
  return String(s || "").replace(/[<>&]/g, (ch) => {
    if (ch === "<") return "&lt;"
    if (ch === ">") return "&gt;"
    return "&amp;"
  })
}

async function sendToTelegram(text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!token || !chatId) {
    console.warn("Telegram env vars missing")
    return
  }

  const url = `https://api.telegram.org/bot${token}/sendMessage`

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "HTML",
      disable_web_page_preview: true,
    }),
  })

  if (!res.ok) {
    const t = await res.text()
    console.error("Telegram sendMessage failed", res.status, t)
  }
}


export async function POST(req: Request) {
  try {
    const body = await req.json()

    if (body?.hp) {
      return NextResponse.json({ ok: true })
    }

    const name = String(body?.name || "").trim()
    const phone = String(body?.phone || "").trim()
    const email = String(body?.email || "").trim()

    if (!name) {
      return NextResponse.json(
        { ok: false, message: "Name is required." },
        { status: 400 }
      )
    }

    if (!phone && !email) {
      return NextResponse.json(
        { ok: false, message: "Phone or email is required." },
        { status: 400 }
      )
    }

    if (email && !isEmail(email)) {
      return NextResponse.json(
        { ok: false, message: "Email looks invalid." },
        { status: 400 }
      )
    }

    const payload = {
      type: String(body?.type || ""),
      frequency: String(body?.frequency || ""),
      name,
      company: String(body?.company || "").trim(),
      phone,
      email,
      city: String(body?.city || "").trim(),
      volume: String(body?.volume || "").trim(),
      flavorPrefs: Array.isArray(body?.flavorPrefs) ? body.flavorPrefs : [],
      message: String(body?.message || "").trim(),
      createdAt: new Date().toISOString(),
    }

    console.log("NEW_LEAD", payload)

    const text =
      `<b>New lead</b>\n` +
      `<b>Type:</b> ${esc(payload.type)}\n` +
      `<b>Frequency:</b> ${esc(payload.frequency)}\n` +
      `<b>Name:</b> ${esc(payload.name)}\n` +
      `<b>Company:</b> ${esc(payload.company || "-")}\n` +
      `<b>Phone:</b> ${esc(payload.phone || "-")}\n` +
      `<b>Email:</b> ${esc(payload.email || "-")}\n` +
      `<b>City:</b> ${esc(payload.city || "-")}\n` +
      `<b>Volume:</b> ${esc(payload.volume || "-")}\n` +
      `<b>Flavor prefs:</b> ${esc(payload.flavorPrefs.join(", ") || "-")}\n` +
      `<b>Message:</b> ${esc(payload.message || "-")}\n` +
      `<b>Time:</b> ${esc(payload.createdAt)}`

    await sendToTelegram(text)

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { ok: false, message: "Bad request." },
      { status: 400 }
    )
  }
}
