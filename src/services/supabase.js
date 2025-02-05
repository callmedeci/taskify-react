import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ixiadjbzvdqypayyvaax.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4aWFkamJ6dmRxeXBheXl2YWF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY0NDAzOTQsImV4cCI6MjA1MjAxNjM5NH0.VKiRGDwBzrTcIACvdXTiAHtgEl-Krb12Z8TEfx2B8hY';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
