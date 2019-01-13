package com.gibranlara.apiboot.controller

import com.gibranlara.apiboot.model.Proyecto
import com.gibranlara.apiboot.pojo.FirmaParticipanteRequest
import com.gibranlara.apiboot.service.ParticipanteService
import com.mongodb.MongoClient
import com.mongodb.WriteResult
import com.mongodb.client.MongoDatabase
import com.mongodb.client.model.Filters
import com.mongodb.client.model.UpdateOptions
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.mongodb.core.MongoTemplate
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.data.mongodb.core.query.Criteria
import org.springframework.data.mongodb.core.query.Query
import org.springframework.data.mongodb.core.query.Update
import java.util.Arrays


@RestController
@RequestMapping("/participantes")
class ParticipanteController {
    @Autowired
    lateinit var participanteService: ParticipanteService

    @PutMapping("/participante/firma")
    fun actualizarFirmaParticipante(@RequestBody firmaRequest: FirmaParticipanteRequest) {
            var mongoClient = MongoClient("locahost")
            var mongoTemplate = MongoTemplate(mongoClient, "spring_mongo_db")

//         db.proyectos.update({
//              _id: ObjectId("5bfa09f0a0441f38d45dcc9c")
//         },
//         {
//            $set: {
//               "reuniones.$[i].participantes.$[j].firma": "dasdsa"
//            }
//         },
//         {
//            arrayFilters: [
//               {
//                  "i._id": ObjectId("5bfa09f0a0441f38d45dcc99")
//               },
//               {
//                  "j.nomina": 2
//               }
//            ]
//         })


        val query: Query = Query()
        query.addCriteria(Criteria("_id").`is`(firmaRequest.IdProyecto))

        val updateOptions: UpdateOptions = UpdateOptions()
        updateOptions
                .arrayFilters(
                        Arrays.asList(
                                Filters.eq("i._id", firmaRequest.IdReunion),
                                Filters.eq("i.nomina", firmaRequest.NoNomina)
                        )
                )

        val update: Update = Update()
        update.set("reuniones.$[i].participantes.$[j].firma", firmaRequest.DataUri)

        
    }
}