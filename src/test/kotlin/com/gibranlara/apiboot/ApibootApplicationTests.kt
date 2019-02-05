package com.gibranlara.apiboot

import com.gibranlara.apiboot.controller.ParticipanteController
import com.gibranlara.apiboot.controller.ProyectoController
import com.gibranlara.apiboot.model.Participante
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.junit4.SpringRunner

@RunWith(SpringRunner::class)
@SpringBootTest
class ApibootApplicationTests {

	@Test
	fun contextLoads() {
		var pc:ProyectoController = ProyectoController()

		pc.getProyectosPaginados()
	}

}
