
export namespace SpeechRecognitionServer {
    // Default Application
 export interface Application {}
    // Class
    
    // CLass Extension
    
    // Records

    // Function options
    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface ListenForOptionalParameter {
      /**
       * text computer will speak as a prompt
       */
      withPrompt?: string;
      /**
       * how many seconds to wait before giving up
       */
      givingUpAfter?: number;
      /**
       * whether to skip phrases with special characters
       */
      filtering?: boolean;
      /**
       * an optional list of commands to be displayed
       */
      displaying?: any;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface ListenContinuouslyForOptionalParameter {
      /**
       * text computer will speak as a prompt
       */
      withPrompt?: string;
      /**
       * how many seconds to wait before giving up
       */
      givingUpAfter?: number;
      /**
       * whether to skip phrases with special characters
       */
      filtering?: boolean;
      /**
       * a unique identifier string for this recognizer
       */
      withIdentifier?: string;
      /**
       * a section title under which the commands will be listed
       */
      withSectionTitle?: string;
      /**
       * an optional list of commands to be displayed
       */
      displaying?: any;
      /**
       * only listen for commands when this application is frontmost
       */
      attachTo?: any;
    }


}
export interface SpeechRecognitionServer extends SpeechRecognitionServer.Application {
    // Functions

     /**
      * Listen for a spoken phrase
      * @param directParameter list of possible phrases to listen for
      * @param option
      * @return the recognized phrase
      */
     listenFor(directParameter: {}, option?: SpeechRecognitionServer.ListenForOptionalParameter): string;

     /**
      * Listen for spoken phrases. Call stop listening when done.
      * @param directParameter list of possible phrases to listen for
      * @param option
      * @return the recognized phrase
      */
     listenContinuouslyFor(directParameter: {}, option?: SpeechRecognitionServer.ListenContinuouslyForOptionalParameter): string;

     /**
      * Stop listening when listening continuously
      * @param directParameter the unqiue identifier string for the recognizer to stop
      * 
      */
     stopListeningForIdentifier(directParameter: string, ): void;
}
