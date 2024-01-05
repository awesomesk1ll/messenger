export const compressText = (text, length = 50) => text?.length > length
            ? `${text.slice(0, length)}...`
            : text;
