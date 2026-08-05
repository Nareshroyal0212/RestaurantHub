package com.restauranthub.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.restauranthub.model.Contact;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {

    List<Contact> findByEmail(String email);

    List<Contact> findBySubjectContainingIgnoreCase(String subject);

    long countByEmail(String email);

}