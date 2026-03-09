package net.javaguides.emsbackend.repository;

import net.javaguides.emsbackend.entity.Disaster;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DisasterRepository extends JpaRepository<Disaster,Long>  {
}
