package com.gibranlara.apiboot

import javafx.application.Application
import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.builder.SpringApplicationBuilder
import org.springframework.boot.runApplication
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer

@SpringBootApplication
class ApibootApplication : SpringBootServletInitializer() {

    protected override fun configure(application: SpringApplicationBuilder) : SpringApplicationBuilder {
        return application.sources(Application::class.java)
    }

    companion object {
        @JvmStatic
        fun main(args: Array<String>) {
            SpringApplication.run(ApibootApplication::class.java, *args)
        }
    }
}
