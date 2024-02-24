export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const mode = searchParams.get('hub.mode')
    console.log(`got url ${request.url}`)

    if(mode == "subscribe"){
        //Subscribe handler
        const id = searchParams.get('hub.challenge')
        const verify_token = searchParams.get('hub.verify_token')
        

        // if (verify_token != "Swn7448810"){
        //     console.log(`Invalid hub.verify_token: ${verify_token}`)
        //     console.log(`Needs to be ${"Swn7448810"}`)

        //     return Response.json({error:`Invalid hub.verify_token: ${verify_token}`},{status:401})
        // }
        console.log(`All good returning id ${id}`)
        return new Response(id)
    }
    console.log(`Unknown mode: ${mode}`)
    return Response.json({error:`Unknown mode: ${mode}`},{status:500})
  }