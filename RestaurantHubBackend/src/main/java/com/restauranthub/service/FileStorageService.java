package com.restauranthub.service;

import java.io.IOException;
import org.springframework.web.multipart.MultipartFile;

public interface FileStorageService {

    String uploadMenuImage(MultipartFile file) throws IOException;

}