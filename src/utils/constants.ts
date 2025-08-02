export const isProduction = process.env.NODE_ENV === 'production'
export const ga_id = process.env.NEXT_PUBLIC_GA
export const base_url = isProduction ? process.env.NEXT_PUBLIC_BASE_URL : 'http://localhost:8080'
export const address = process.env.NEXT_PUBLIC_ADDRESS as string
export const privyAppId = process.env.privyAppId as string
export const privyClientId = process.env.privyClientId as string
