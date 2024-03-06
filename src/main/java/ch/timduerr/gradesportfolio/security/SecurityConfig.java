package ch.timduerr.gradesportfolio.security;

import com.vaadin.flow.spring.security.VaadinWebSecurity;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.provisioning.UserDetailsManager;

@EnableWebSecurity
@Configuration
public class SecurityConfig extends VaadinWebSecurity {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // Set default security policy that permits Hilla internal requests and
        // denies all other
        super.configure(http);

        // use a form based login
        http.formLogin(Customizer.withDefaults());
    }

    @Bean
    public UserDetailsManager userDetailsService() {
        // Configure users and roles in memory
        // TODO: Replace with a real user management
        // Never use hard-coded credentials.
        // You should never use hard-coded credentials in a real application.
        // The Security documentation has examples of setting up LDAP or SQL-based user management.
        // https://hilla.dev/docs/react/guides/security
        return new InMemoryUserDetailsManager(
                // the {noop} prefix tells Spring that the password is not encoded
                User.withUsername("user").password("{noop}user").roles("USER").build(),
                User.withUsername("admin").password("{noop}admin").roles("ADMIN", "USER").build()
        );
    }
}
