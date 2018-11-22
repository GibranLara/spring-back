package com.gibranlara.apiboot.config

import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration


@Configuration
class CorsConfiguration {
    @Bean
    fun corsConfigurer(): WebMvcConfigurer {
        return object : WebMvcConfigurerAdapter() {
            override fun addCorsMappings(registry: CorsRegistry) {
                registry.addMapping("/**")
                        .allowedOrigins("http://localhost:4873")
                        .allowedMethods("GET", "POST","PUT", "DELETE");
            }
        }
    }
}