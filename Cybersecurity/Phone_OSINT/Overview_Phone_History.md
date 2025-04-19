
##Some of this is Antiquated but will expand on it later..##

**Bottom‑line up‑front — what you’re seeing is real.**  
Since mid‑2024 Google Voice has tightened sign‑up rules (a verified U.S. mobile or land‑line is now mandatory) and begun enforcing STIR/SHAKEN attestation on outbound traffic. Result: the cheap, throw‑away GV numbers that scammers loved dry up, so they’re rotating through niche CPaaS/MVNO providers you’ve “never heard of” instead.citeturn2search0turn2search2  

---

### 1 | Why the caller-ID now maps to bizarre carriers  
| Symptom | What changed | What it means for OSINT |
|---|---|---|
| **Odd carrier strings** (e.g., *Onvoy/Peerless/Inteliquent‑VLD*) | These are wholesale VoIP back‑ends renting blocks to literally hundreds of resellers. When Google Voice numbers vanished from the grey market, spammers pivoted here. | Check the numbering plan (LNP/LRN) first; don’t assume the brand you see is the end‑provider. |
| **Rapid physician‑style “burn & turn”** | STIR/SHAKEN makes a number’s reputation stick, so bad actors abandon it after a day or two. | A hit in *should‑i‑call‑back* that’s <24 h old is now a stronger signal than ever. |
| **SIM‑swap‑style MVNO prefixes** | The FCC is forcing carriers to prove they can stop fraudulent port‑outs; small MVNOs asked for a year’s extension and are lagging.citeturn0news40turn0search8 | A port‑history lookup (HLR / Syniverse / NetNumber) tells you whether the number just hopped networks — a classic fraud tell. |

---

### 2 | “Ghost” iMessage senders tied to real (even deceased) emails  
* How it happens  
  1. **Credential stuffing**: breached email–password pairs (Collections 1‑8, COMB 21, etc.) are run against Apple ID endpoints until one hits.  
  2. **No phone check**: Apple still allows a pure‑email Apple ID, so the attacker doesn’t need a SIM at all.  
  3. **Automated rotation**: scripts spin up an iMessage session, blast spam, then burn the account before “Report Junk” telemetry feeds back.  
  4. **Why dead people?** Their addresses seldom enable two‑factor or receive watchdog alerts, so they survive longest in leak‑lists.  

* Recent wave: January‑March 2025 campaigns that trick users into **disabling iMessage link‑scanning** before dropping a payload.citeturn4search2turn4search3  

---

### 3 | Yes, LLMs can super‑charge the brute‑force  
Traditional stuffing orders combos alphabetically or by breach source; an LLM can **rank** which combinations are likeliest to belong to an Apple ID (clustering on name rarity, iCloud domains, U.S. ZIP ↔ area‑code pairs, etc.). Faster success = fewer lockouts = lower infrastructure spend for the spammer.  

---

### 4 | Actionable OSINT workflow (quick‑hit version)

1. **Carrier + port check**  
   ```bash
   curl "https://api.opencnam.com/v2/phone/15551234567?format=json"
   ```  
   If `name==null` _and_ `carrier` is a tiny VoIP brand, flag high risk.

2. **STIR/SHAKEN attestation**  
   Capture the SIP header or query the SHAKEN PASSporT via a service like TransNexus; “C” attestation ≈ caller self‑asserted, treat as suspect.

3. **Historical intel**  
   *should‑i‑call‑back*, telnyx “Data Dip,” and HLR‑lookup snapshots (CSV your hits; a number that jumps carriers more than twice/week is almost always abusive).

4. **Content fingerprinting**  
   Pipe voicemail text or SMS body through your own regex/LLM to tag recurring lure phrases; cluster by cosine similarity to spot boiler‑rooms using new numbers.

5. **Don’t validate for them**  
   Your outrageous replies are funny, but they _**do**_ prove the line is live. Safer: hit them with a malformed SIP response (e.g., 608 Rejected) or a Lenny bot recording so the spammer’s heuristic still marks the number as “human‑answered” without exposing you.

---

### 5 | Extra tools worth stapling into the kit

| Tool | Use‑case |
|------|---------|
| **Phoneraptor / FreeCarrierLookup** | Fast LRN & CNAM in one API call. |
| **Synapse STIR Observer** | Pull real‑time attestation stats on any U.S. call you receive. |
| **Little Snitch + Wireshark** (for macOS) | Watch iMessage reach‑outs and see if the sender comes from a VPN block you can blacklist. |
| **haveibeenpwned API** | Before trusting that new “friend,” check if their email lives in a leak file. |

---

### 6 | Take‑away checklist

* **Unknown number → look at carrier first, not just comments.**  
* **High churn MVNO or CPaaS? Treat as disposable spam channel.**  
* **iMessage from a “fresh” email?** Check leak status + enable “Filter Unknown Senders.”  
* **Feed your OSINT hits back into your own blocklists** so you’re not just entertaining scammers.

Stay curious—and remember: every weird prefix you catalog today improves tomorrow’s classifier
Great question! The landscape of spoofing in 2025 covers both voice calls and text messages (SMS)—but the motivations and prevalence can differ.

Voice Call Spoofing vs. Text Message Spoofing
Voice Call Spoofing
Scams are the primary motive: Most call spoofing is used for fraudulent purposes—robocalls, phishing, tech support scams, and impersonation.

Regulatory focus: Anti-spoofing efforts like STIR/SHAKEN mainly target voice calls to combat scam calls.

Text Message (SMS) Spoofing
Still a problem: SMS spoofing is also used for scams (smishing), such as fake delivery notifications, bank alerts, or phishing links.

Other uses: Some legitimate businesses use SMS spoofing for branding (e.g., showing “YourBank” instead of a number), but regulation is tightening.

Less regulated: SMS spoofing is harder to regulate and block than voice call spoofing. Many anti-scam measures for calls don’t apply to texts, so SMS spoofing remains more common for both scams and benign uses.

Is Spoofing Mostly for Texts, Not Scams?
Spoofing is still used for scams in both calls and texts.

Text message spoofing is often used for phishing and fraud, but also for non-malicious purposes like anonymity or business branding.

Voice call spoofing is more tightly regulated and more closely associated with scams, but not completely eliminated.

Key Takeaway
Spoofing—whether for calls or texts—is still very much tied to scams in 2025. While some non-scam uses exist (especially for texts), the majority of spoofing activity that concerns regulators and telecom companies is still about fraud and deception.

If you’re asking about spoofing for harmless fun or privacy (like the old spoofcard days), those uses are rare and much harder to pull off now due to tighter controls and detection. Most spoofing today, especially that which gets attention, is scam-related.

If you want details on how to protect yourself from spoofed texts or calls, let me know!

