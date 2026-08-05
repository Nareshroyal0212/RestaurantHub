package com.restauranthub.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.restauranthub.model.Contact;
import com.restauranthub.service.ContactService;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:5173")
public class ContactController {

    @Autowired
    private ContactService contactService;

    // ==========================
    // Save Contact Message
    // ==========================
    @PostMapping
    public ResponseEntity<Contact> saveContact(
            @RequestBody Contact contact) {

        return ResponseEntity.ok(contactService.saveContact(contact));
    }

    // ==========================
    // Get All Contact Messages
    // ==========================
    @GetMapping
    public ResponseEntity<List<Contact>> getAllContacts() {

        return ResponseEntity.ok(contactService.getAllContacts());
    }

    // ==========================
    // Get Contact By Id
    // ==========================
    @GetMapping("/{id}")
    public ResponseEntity<?> getContactById(
            @PathVariable Long id) {

        Optional<Contact> contact = contactService.getContactById(id);

        if (contact.isPresent()) {
            return ResponseEntity.ok(contact.get());
        }

        return ResponseEntity.badRequest()
                .body("Contact message not found");
    }

    // ==========================
    // Get Contact By Email
    // ==========================
    @GetMapping("/email/{email}")
    public ResponseEntity<List<Contact>> getByEmail(
            @PathVariable String email) {

        return ResponseEntity.ok(contactService.getContactByEmail(email));
    }

    // ==========================
    // Search By Subject
    // ==========================
    @GetMapping("/search")
    public ResponseEntity<List<Contact>> searchBySubject(
            @RequestParam String subject) {

        return ResponseEntity.ok(contactService.searchBySubject(subject));
    }

    // ==========================
    // Delete Contact
    // ==========================
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteContact(
            @PathVariable Long id) {

        return ResponseEntity.ok(contactService.deleteContact(id));
    }

}