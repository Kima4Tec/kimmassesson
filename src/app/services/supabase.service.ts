import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://nqxilgeuibodmukxfmtt.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xeGlsZ2V1aWJvZG11a3hmbXR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk2NDQ1ODIsImV4cCI6MjA3NTIyMDU4Mn0.mkEpIr0jE-hajrkkSkYr91opARpz5ZmJNXLKiH3FIvY';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

@Injectable()
export class ContentService {

  async getSection(section: string) {
    const { data, error } = await supabase
      .from('sections')
      .select('*')
      .eq('name', section)
      .single();
    if (error) throw error;
    return data;
  }

  async updateSection(section: string, payload: { title: string; body: string }) {
    const { data, error } = await supabase
      .from('sections')
      .update(payload)
      .eq('name', section);
    if (error) throw error;
    return data;
  }
}