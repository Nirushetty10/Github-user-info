import { Component } from "react";

export const ADD_COMMENT = "ADD_COMMENT";
export const DEL_COMMENT = "DEL_COMMENT";
export const ADD_REPLY = "ADD_REPLY";
export const DEL_REPLY = "DEL_REPLY";

export const addComment = (comment) => ({
    type : ADD_COMMENT,
    payload : comment
})

export const delComment = (id) => ({
    type : DEL_COMMENT,
    payload : id
})

export const addReply = (comment) => ({
    type : ADD_REPLY,
    payload : comment
})

export const delReply = (id) => ({
    type : DEL_REPLY,
    payload : id
})