const defaultHeaders = {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "apidogToken": "weMJuqrtYk0shfBcMqR2F",
}
type methods = "POST" | "GET"

export const serverRequest = async (key: string, data: any, method: methods) => {
    // const url = `${process.env.BASE_API_URL}/${key}`
    const url = `https://mock.apidog.com/m1/730725-707199-default/${key}`
    try {
        const options = {
            method,
            body: "",
            headers: defaultHeaders,
        }
        if(method == "POST") {
            options.body = JSON.stringify(data)
        }
        const result = await fetch(url, options)
        const jsonResponse = await result.json()
        return jsonResponse;
    } catch(err) {
        return false
    }
}