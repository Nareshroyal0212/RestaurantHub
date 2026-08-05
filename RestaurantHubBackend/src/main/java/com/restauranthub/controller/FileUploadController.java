package com.restauranthub.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.restauranthub.service.FileStorageService;

@RestController
@RequestMapping("/api/upload")
@CrossOrigin(origins = "http://localhost:5173")
public class FileUploadController {

    @Autowired
    private FileStorageService fileStorageService;

    @PostMapping("/menu")
    public ResponseEntity<?> uploadMenuImage(

            @RequestParam("file")
            MultipartFile file)

            throws IOException {

        String imagePath =
                fileStorageService.uploadMenuImage(file);

        Map<String, String> response =
                new HashMap<>();

        response.put("imageUrl", imagePath);

        return ResponseEntity.ok(response);

    }

}