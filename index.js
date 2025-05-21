import { z } from "zod/v4";

const schema = z.iso.datetime({ local: true });

// as returned by html datetime-local input (without seconds)
// <input type="datetime-local" value="2025-05-21T12:00" />
const datetimeLocal = "2025-05-21T12:00";
const parsed = schema.safeParse(datetimeLocal);

// with seconds
const datetimeLocalWithSeconds = "2025-05-21T12:00:00";
const parsedWithSeconds = schema.safeParse(datetimeLocalWithSeconds);

// this errors, but it shouldn't
console.log(parsed.error ? "✖ Invalid ISO without seconds" : "✔ Valid ISO without seconds"); // has error

// this doesn't error
console.log(parsedWithSeconds.error ? "✖ Invalid ISO with seconds" : "✔ Valid ISO with seconds"); // does not have error
