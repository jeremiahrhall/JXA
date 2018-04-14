
export namespace QuickTimePlayer {
    // Records

    // Function options






    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface StepBackwardOptionalParameter {
      /**
       * number of steps
       */
      by?: number;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface StepForwardOptionalParameter {
      /**
       * number of steps
       */
      by?: number;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface TrimOptionalParameter {
      /**
       * start time in seconds
       */
      from: any;
      /**
       * end time in seconds
       */
      to: any;
    }





    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface ExportOptionalParameter {
      /**
       * the destination file
       */
      in: any;
      /**
       * the name of the export settings preset to use
       */
      usingSettingsPreset: string;
    }


}
export interface QuickTimePlayer {
    // Functions

     /**
      * Open a URL.
      * @param directParameter the URL
      * 
      */
     openURL(directParameter: string, ): void

     /**
      * Play the movie.
      * @param directParameter the movie to play
      * 
      */
     play(directParameter: any, ): void

     /**
      * Start the movie recording.
      * @param directParameter the recording to start
      * 
      */
     start(directParameter: any, ): void

     /**
      * Pause the recording.
      * @param directParameter the recording to pause
      * 
      */
     pause(directParameter: any, ): void

     /**
      * Resume the recording.
      * @param directParameter the recording to resume
      * 
      */
     resume(directParameter: any, ): void

     /**
      * Stop the movie or recording.
      * @param directParameter the movie or recording to stop
      * 
      */
     stop(directParameter: any, ): void

     /**
      * Step the movie backward the specified number of steps (default is 1).
      * @param directParameter the movie to step
      * @param option
      * 
      */
     stepBackward(directParameter: any, option?: QuickTimePlayer.StepBackwardOptionalParameter): void

     /**
      * Step the movie forward the specified number of steps (default is 1).
      * @param directParameter the movie to step
      * @param option
      * 
      */
     stepForward(directParameter: any, option?: QuickTimePlayer.StepForwardOptionalParameter): void

     /**
      * Trim the movie.
      * @param directParameter the movie to trim
      * @param option
      * 
      */
     trim(directParameter: any, option?: QuickTimePlayer.TrimOptionalParameter): void

     /**
      * Present the document full screen.
      * @param directParameter the document to present
      * 
      */
     present(directParameter: any, ): void

     /**
      * Create a new movie recording document.

      * @return The new movie recording document.
      */
     newMovieRecording(): void

     /**
      * Create a new audio recording document.

      * @return The new audio recording document.
      */
     newAudioRecording(): void

     /**
      * Create a new screen recording document.

      * @return The new screen recording document.
      */
     newScreenRecording(): void

     /**
      * Export a movie to another file
      * @param directParameter the movie to export
      * @param option
      * 
      */
     export(directParameter: any, option?: QuickTimePlayer.ExportOptionalParameter): void

     /**
      * Show the document's Remote HUD
      * @param directParameter undefined
      * 
      */
     showRemoteHud(directParameter: any, ): void
}
