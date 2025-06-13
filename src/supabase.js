// src/supabase.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ksauhnoggobnsjsddghv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzYXVobm9nZ29ibnNqc2RkZ2h2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkxOTMxNDgsImV4cCI6MjA2NDc2OTE0OH0.NI6HL6Ht4_YCVXDj_VvO8lsZEAw00i_0PYniJ7knTRw";
export const supabase = createClient(supabaseUrl, supabaseKey);
