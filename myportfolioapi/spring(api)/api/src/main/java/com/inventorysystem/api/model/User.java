package com.inventorysystem.api.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
@Getter
@Data
@Entity
@Table(name="user ")

public class User implements UserDetails {
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id") // Customized column name for id
    private Integer id;

    @Setter
    @Column(name = "user_email")
    private String email;

    @Column(name = "first_name")
    private String firstname;

    @Column(name = "last_name")
    private String lastname;
    @Setter
    @Column(name = "user_name")

    private String username;
    @Setter
    @Column(name = "phone_number") // Descriptive column name for telephone
    private String telephone;
    @Setter
    @Column(name = "user_password")
    private String password;
    @Setter
    @Enumerated(value=EnumType.STRING)
    Role role;

    public void setFirstName(String firstName) {
        this.firstname = firstName;
    }

    public void setLastName(String lastName) {
        this.lastname = lastName;
    }

@Override
public String getUsername(){
        return email;
}
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

}
