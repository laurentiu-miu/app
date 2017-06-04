package miu.app;

import miu.app.web.component.EntityObjectArgumentResolver;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;


import java.util.ArrayList;
import java.util.List;

/**
 * @author LaurentiuM
 * @version createdOn: 1/17/16
 */
@Configuration
@EnableWebMvc
@Import(StaticResourcesConfig.class)
public class WebMvcConfiguration extends WebMvcConfigurationSupport {


    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> argumentResolvers) {
        MappingJackson2HttpMessageConverter mappingJackson2HttpMessageConverter = new MappingJackson2HttpMessageConverter();
        List<HttpMessageConverter<?>> httpMessageConverter = new ArrayList<HttpMessageConverter<?>>();
        httpMessageConverter.add(mappingJackson2HttpMessageConverter);
        final EntityObjectArgumentResolver entityObjectArgumentResolver = new EntityObjectArgumentResolver(httpMessageConverter);
        argumentResolvers.add(entityObjectArgumentResolver);
    }

}
