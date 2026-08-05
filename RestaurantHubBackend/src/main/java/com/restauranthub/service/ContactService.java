package com.restauranthub.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.restauranthub.model.Contact;
import com.restauranthub.repository.ContactRepository;

@Service
public class ContactService {

    @Autowired
    private ContactRepository contactRepository;

    // ==========================
    // Save Contact Message
    // ==========================
    public Contact saveContact(Contact contact) {

        return contactRepository.save(contact);

    }

    // ==========================
    // Get All Contact Messages
    // ==========================
    public List<Contact> getAllContacts() {

        return contactRepository.findAll();

    }

    // ==========================
    // Get Contact By Id
    // ==========================
    public Optional<Contact> getContactById(Long id) {

        return contactRepository.findById(id);

    }

    // ==========================
    // Get Contact By Email
    // ==========================
    public List<Contact> getContactByEmail(String email) {

        return contactRepository.findByEmail(email);

    }

    // ==========================
    // Search By Subject
    // ==========================
    public List<Contact> searchBySubject(String subject) {

        return contactRepository.findBySubjectContainingIgnoreCase(subject);

    }

    // ==========================
    // Delete Contact
    // ==========================
    public String deleteContact(Long id) {

        if (!contactRepository.existsById(id)) {

            return "Contact message not found";

        }

        contactRepository.deleteById(id);

        return "Contact message deleted successfully";

    }

}