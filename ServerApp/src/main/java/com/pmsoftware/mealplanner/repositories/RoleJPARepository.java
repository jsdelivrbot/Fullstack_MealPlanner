package com.pmsoftware.mealplanner.repositories;

import com.pmsoftware.mealplanner.model.Role;
import com.pmsoftware.mealplanner.model.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface RoleJPARepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(RoleName roleName);
}