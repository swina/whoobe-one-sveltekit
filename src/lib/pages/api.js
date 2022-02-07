async function api(){
    const data = await fetch ( 'https://test.test')
    return data
}

const result = api();

export default result;