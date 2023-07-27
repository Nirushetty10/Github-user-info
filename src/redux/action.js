import { Component } from "react";

export const ADD_COMMENT = "ADD_COMMENT";
export const DEL_COMMENT = "DEL_COMMENT";
export const ADD_REPLY = "ADD_REPLY";
export const DEL_REPLY = "DEL_REPLY";

export const ADD_CONTACT = "ADD_CONTACT";
export const DEL_CONTACT = "DEL_CONTACT";



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

// contact manager

export const addContact = (user) => ({
    type : ADD_CONTACT,
    payload : user
})

export const deleteContact = (id) => ({
    type : DEL_CONTACT,
    payload : id
})