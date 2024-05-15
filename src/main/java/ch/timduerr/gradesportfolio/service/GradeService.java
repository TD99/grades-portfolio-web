package ch.timduerr.gradesportfolio.service;

import ch.timduerr.gradesportfolio.entity.Grade;
import ch.timduerr.gradesportfolio.persistence.GradeRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.BrowserCallable;
import dev.hilla.crud.ListRepositoryService;

@BrowserCallable
@AnonymousAllowed
public class GradeService extends ListRepositoryService<Grade, Long, GradeRepository> {
}
