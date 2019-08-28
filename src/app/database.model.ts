export class UserChats{
    chats:[{
        name:string,
        unread:boolean,
        chatId:string
    }];
    moreFlag:boolean;
    nextDocId = '';

}
export class SingleChat{
    members:[];
    startedOn:string;
    blocked: boolean;
}
export class SingleMessage{
    senderId:string;
    content:string;
    timeStamp:string;
}

