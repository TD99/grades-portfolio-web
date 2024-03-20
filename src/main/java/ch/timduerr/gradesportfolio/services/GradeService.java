package ch.timduerr.gradesportfolio.services;

import ch.timduerr.gradesportfolio.models.Grade;
import ch.timduerr.gradesportfolio.repositories.GradeRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.BrowserCallable;
import dev.hilla.crud.ListRepositoryService;

@BrowserCallable
@AnonymousAllowed
public class GradeService extends ListRepositoryService<Grade, Long, GradeRepository> {
}
