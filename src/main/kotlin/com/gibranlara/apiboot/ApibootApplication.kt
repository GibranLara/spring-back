package com.gibranlara.apiboot

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class ApibootApplication

fun main(args: Array<String>) {
    SpringApplication.run(ApibootApplication::class.java, *args)
}
