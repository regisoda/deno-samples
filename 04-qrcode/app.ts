import { qrcode } from 'https://deno.land/x/qrcode/mod.ts'
import { serve } from 'https://deno.land/std/http/server.ts'

const PORT = 8000;
const myServer = serve({ port: PORT });
console.log(`Server running... Port: ${PORT}`);

let args = Deno.args;

let base64 = await qrcode(args[0] || `https://github.com/regisoda/deno-samples`, {
    size: 300
})

for await (const request of myServer) {

    request.respond({
        headers: new Headers({
            'Content-Type': 'text/html'
        }),
        body: `
            <div style="display: flex; justify-content: center; margin-top: 30px;">
                <img src="${base64}" />
            </div>
        `
    });

}