import * as dotenv from 'dotenv'
dotenv.config()

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.DB_PROJECT_URL || ''
const supabaseKey = process.env.DB_ANON_API_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseKey)
