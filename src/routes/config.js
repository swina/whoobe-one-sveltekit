import os from 'os'
import fs from 'fs'
import path from 'path'
// Load the configuration from ~/.small-tech.org/basil/config.json
const config = JSON.parse ( fs.readFileSync( path.join ( import.meta.env.VITE_WHOOBE , '/src/routes/config.json') ) )

// Return the configuration in response to a GET request on /config
export async function get() {
  return {
    body: config
  }
}