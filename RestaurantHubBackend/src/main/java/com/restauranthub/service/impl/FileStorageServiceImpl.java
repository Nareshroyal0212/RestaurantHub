package com.restauranthub.service.impl;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.restauranthub.service.FileStorageService;

@Service
public class FileStorageServiceImpl implements FileStorageService {

	private static final String UPLOAD_DIR = "src/uploads/menu/";

    @Override
    public String uploadMenuImage(MultipartFile file)
            throws IOException {

        Files.createDirectories(Paths.get(UPLOAD_DIR));

        String fileName =
                System.currentTimeMillis() + "_" +
                file.getOriginalFilename();

        Path path = Paths.get(UPLOAD_DIR + fileName);

        Files.copy(file.getInputStream(), path);

        return "/uploads/menu/" + fileName;
    }

}