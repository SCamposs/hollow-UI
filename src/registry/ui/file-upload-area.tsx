/**
 * Component: file-upload-area
 * Developed by: Ítalo Soares Campos
 * Library: @scmposs/hollow-ui
 * Homepage: https://github.com/SCamposs/hollow-ui
 */

"use client";

import { useState, useRef } from "react";
import { Button } from "./button";
import { Label } from "./label";
import { XCircle, Upload } from "lucide-react";

interface FileUploadAreaProps {
  accept: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  dashed?: boolean;
  multiple?: boolean;
  onFileChange?: (files: File[]) => void;
}

export function FileUploadArea({
  accept,
  label,
  description,
  icon,
  dashed,
  multiple = false,
  onFileChange,
}: FileUploadAreaProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      // Filtrar arquivos válidos baseado no accept
      const validFiles = files.filter((file) => {
        if (accept === "image/*") return file.type.startsWith("image/");
        if (accept === "application/pdf")
          return file.type === "application/pdf";
        if (accept === "application/pdf,image/*") {
          return (
            file.type === "application/pdf" || file.type.startsWith("image/")
          );
        }
        return true;
      });

      if (validFiles.length > 0) {
        const newFiles = multiple
          ? [...selectedFiles, ...validFiles]
          : validFiles.slice(0, 1);
        setSelectedFiles(newFiles);
        onFileChange?.(newFiles);
      }
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const fileArray = Array.from(files);
      // Filtrar arquivos válidos baseado no accept
      const validFiles = fileArray.filter((file) => {
        if (accept === "image/*") return file.type.startsWith("image/");
        if (accept === "application/pdf")
          return file.type === "application/pdf";
        if (accept === "application/pdf,image/*") {
          return (
            file.type === "application/pdf" || file.type.startsWith("image/")
          );
        }
        return true;
      });

      if (validFiles.length > 0) {
        const newFiles = multiple
          ? [...selectedFiles, ...validFiles]
          : validFiles.slice(0, 1);
        setSelectedFiles(newFiles);
        onFileChange?.(newFiles);
      }
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const removeFile = (indexToRemove: number) => {
    const newFiles = selectedFiles.filter(
      (_, index) => index !== indexToRemove
    );
    setSelectedFiles(newFiles);
    onFileChange?.(newFiles);
    if (newFiles.length === 0 && fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const removeAllFiles = () => {
    setSelectedFiles([]);
    onFileChange?.([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div>
      <Label className="text-sm font-medium">{label}</Label>
      <div
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
          relative mt-1 border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors
          ${
            dashed
              ? "border-blue-900 hover:border-blue-700"
              : "border-gray-300 hover:border-gray-400"
          }
          ${isDragOver ? "border-blue-500 bg-blue-50 dark:bg-blue-950/20" : ""}
          ${
            selectedFiles.length > 0
              ? "bg-green-50 dark:bg-green-950/20 border-green-300"
              : ""
          }
        `}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleFileSelect}
          className="hidden"
        />

        {selectedFiles.length > 0 ? (
          <div className="space-y-2">
            {selectedFiles.length > 1 && (
              <div className="flex justify-end">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeAllFiles();
                  }}
                  className="text-xs h-7 hover:bg-muted hover:text-foreground/90"
                >
                  Remover todos
                </Button>
              </div>
            )}
            {selectedFiles.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-background/50 rounded-md p-2"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  {icon}
                  <div className="text-left min-w-0 flex-1">
                    <p className="text-sm font-medium text-green-700 dark:text-green-300 truncate">
                      {file.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(index);
                  }}
                  className="h-7 w-7 p-0 border-transparent text-red-500 hover:text-muted hover:bg-accent/70 rounded-full border hover:border-foreground/30 dark:hover:text-foreground  transition-colors flex-shrink-0"
                >
                  <XCircle className="h-5 w-5" />
                </Button>
              </div>
            ))}
            {multiple && (
              <div className="text-center pt-2 border-t">
                <p className="text-xs text-muted-foreground">
                  Clique para adicionar mais arquivos
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3">
            {icon}
            <div>
              <p className="text-sm font-medium">
                {isDragOver
                  ? "Solte os arquivos aqui"
                  : multiple
                  ? "Clique para selecionar ou arraste os arquivos"
                  : "Clique para selecionar ou arraste o arquivo"}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {description}
              </p>
            </div>
            <Upload className="h-5 w-5 text-muted-foreground" />
          </div>
        )}
      </div>
    </div>
  );
}
