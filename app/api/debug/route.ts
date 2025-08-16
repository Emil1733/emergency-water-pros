import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function GET() {
  // Check environment variables
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  
  const supabase = supabaseUrl && serviceRoleKey
    ? createClient(supabaseUrl, serviceRoleKey)
    : null

  const debugInfo: any = {
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    supabase: {
      urlExists: !!supabaseUrl,
      urlValue: supabaseUrl ? `${supabaseUrl.substring(0, 20)}...` : 'undefined',
      serviceRoleExists: !!serviceRoleKey,
      serviceRoleValue: serviceRoleKey ? `${serviceRoleKey.substring(0, 10)}...` : 'undefined',
      clientCreated: !!supabase
    }
  }

  // Test database connection if client exists
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('leads')
        .select('id')
        .limit(1)
      
      debugInfo.database = {
        connectionTest: 'success',
        tableExists: !error,
        error: error?.message || null
      }
    } catch (err) {
      debugInfo.database = {
        connectionTest: 'failed',
        error: (err as Error).message
      }
    }
  } else {
    debugInfo.database = {
      connectionTest: 'skipped',
      reason: 'No Supabase client'
    }
  }

  return NextResponse.json(debugInfo, { status: 200 })
}