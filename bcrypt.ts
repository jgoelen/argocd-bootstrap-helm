/*
 * Hash a secret using bcrypt.
 *
 * Run this script using Deno
 * 
 * deno run --quiet --allow-net bcrypt.ts "my-secret-123"
 */

import * as bcrypt from "https://deno.land/x/bcrypt@v0.3.0/mod.ts";

const [secret,] = Deno.args;

if(secret) {
    const hash = await bcrypt.hash(secret);
    console.log(hash);
} else {
    console.log("🔥 No secret specified")
}