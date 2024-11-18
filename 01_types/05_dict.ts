// TS adds several new types, such as enum, tuple, dict
interface Channel {
    broadcast:boolean
    ident:string
    audience:number
}

enum channels {bbc4='BBC 4', bbc2='BBC 2', bbc1='BBC 1', }

// here is a dictionary
interface ChannelDict {
    [market:string] : Channel
}

let d:ChannelDict = {} 
d['bbc4'] = {broadcast:true, ident:'BBC 4', audience:342}
d[channels.bbc2] = {broadcast:true, ident:'BBC 2', audience:42}
