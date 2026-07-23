// ==========================================================================
// FORM SUBMISSION HELPER
// Uses FormSubmit.co — a free service that emails form data straight to an
// inbox. No account, no API key, no server to maintain.
//
// ONE-TIME SETUP: The very first submission to a given email address will
// NOT arrive instantly — FormSubmit sends a confirmation email to that
// address first. Whoever owns the inbox (school office / principal) must
// open that email and click "Confirm" once. After that, every future
// submission is delivered immediately and automatically.
// ==========================================================================

export async function submitFormAjax(
  email: string,
  payload: Record<string, string>,
  subject: string
) {
  const res = await fetch(`https://formsubmit.co/ajax/${email}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      ...payload,
      _subject: subject,
      _captcha: "false"
    })
  });

  if (!res.ok) {
    throw new Error("Submission failed");
  }

  return res.json();
}
