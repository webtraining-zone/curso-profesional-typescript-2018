export class StringUtils {

    static cutString(inputString: string, maxLength: number = 255) {
        const MAX_LENGTH_SUMMARY = maxLength;
        const SEPARATOR = ' ';
        if (inputString.length <= MAX_LENGTH_SUMMARY) return inputString;
        return inputString.substr(0, inputString.lastIndexOf(SEPARATOR, MAX_LENGTH_SUMMARY)) + '...';
    }
}