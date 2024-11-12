

function submit(e){
    return ({
        type:"sub",
        payload:e.target[0].value
    })
}

function change(e){
    return({
        type:"chn",
        payload:e.target.value
    })
}

function remove(v,i){
    return({
        type:"del",
        payloadValue:v,
        payloadIndex:i
    })
}


function edt(v,i){
    return({
        type:"edit",
        payloadValue:v,
        payloadIndex:i

    })
}

export {submit,change,remove,edt}