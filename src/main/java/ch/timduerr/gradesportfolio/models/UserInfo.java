package ch.timduerr.gradesportfolio.models;

import dev.hilla.Nonnull;

import java.util.Collection;
import java.util.Collections;

public record UserInfo(@Nonnull String name, @Nonnull Collection<@Nonnull String> authorities) {
    public UserInfo(String name, Collection<String> authorities) {
        this.name = name;
        this.authorities = Collections.unmodifiableCollection(authorities);
    }
}
