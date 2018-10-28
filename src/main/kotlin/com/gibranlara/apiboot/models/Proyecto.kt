package com.gibranlara.apiboot.models

import org.bson.types.ObjectId
import org.springframework.data.annotation.Id

data class Proyecto (
        @Id
        val _id: ObjectId,
        val nombre: String,
        val area: String,
        val fecha:String
)
{
}