
export namespace DatabaseEvents {
    // Default Application
 export interface Application {}
    // Class
 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * An application's top level scripting object.
  */
 export interface Application {
   /**
    * Is this the frontmost (active) application?
    */
   frontmost(): boolean;
   /**
    * The name of the application.
    */
   name(): string;
   /**
    * The version of the application.
    */
   version(): string;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A color.
  */
 export interface Color {}

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A document.
  */
 export interface Document {
   /**
    * Has the document been modified since the last save?
    */
   modified(): boolean;
   /**
    * The document's name.
    */
   name(): string;
   /**
    * The document's path.
    */
   path(): string;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A scriptable object.
  */
 export interface Item {
   /**
    * The class of the object.
    */
   class(): any;
   /**
    * All of the object's properties.
    */
   properties(): any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A window.
  */
 export interface Window {
   /**
    * The bounding rectangle of the window.
    */
   bounds(): any;
   /**
    * Whether the window has a close box.
    */
   closeable(): boolean;
   /**
    * The document whose contents are being displayed in the window.
    */
   document(): any;
   /**
    * Whether the window floats.
    */
   floating(): boolean;
   /**
    * The unique identifier of the window.
    */
   id(): number;
   /**
    * The index of the window, ordered front to back.
    */
   index(): number;
   /**
    * Whether the window can be miniaturized.
    */
   miniaturizable(): boolean;
   /**
    * Whether the window is currently miniaturized.
    */
   miniaturized(): boolean;
   /**
    * Whether the window is the application's current modal window.
    */
   modal(): boolean;
   /**
    * The full title of the window.
    */
   name(): string;
   /**
    * Whether the window can be resized.
    */
   resizable(): boolean;
   /**
    * Whether the window has a title bar.
    */
   titled(): boolean;
   /**
    * Whether the window is currently visible.
    */
   visible(): boolean;
   /**
    * Whether the window can be zoomed.
    */
   zoomable(): boolean;
   /**
    * Whether the window is currently zoomed.
    */
   zoomed(): boolean;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * Represents an inline text attachment. This class is used mainly for make commands.
  */
 export interface Attachment {
   /**
    * The path to the file for the attachment
    */
   fileName(): string;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * This subdivides the text into chunks that all have the same attributes.
  */
 export interface AttributeRun {
   /**
    * The color of the first character.
    */
   color(): any;
   /**
    * The name of the font of the first character.
    */
   font(): string;
   /**
    * The size in points of the first character.
    */
   size(): number;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * This subdivides the text into characters.
  */
 export interface Character {
   /**
    * The color of the first character.
    */
   color(): any;
   /**
    * The name of the font of the first character.
    */
   font(): string;
   /**
    * The size in points of the first character.
    */
   size(): number;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * This subdivides the text into paragraphs.
  */
 export interface Paragraph {
   /**
    * The color of the first character.
    */
   color(): any;
   /**
    * The name of the font of the first character.
    */
   font(): string;
   /**
    * The size in points of the first character.
    */
   size(): number;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * Rich (styled) text
  */
 export interface Text {
   /**
    * The color of the first character.
    */
   color(): any;
   /**
    * The name of the font of the first character.
    */
   font(): string;
   /**
    * The size in points of the first character.
    */
   size(): number;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * This subdivides the text into words.
  */
 export interface Word {
   /**
    * The color of the first character.
    */
   color(): any;
   /**
    * The name of the font of the first character.
    */
   font(): string;
   /**
    * The size in points of the first character.
    */
   size(): number;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A collection of records, residing at a location in the file system
  */
 export interface Database {
   /**
    * the folder that contains the database
    */
   location(): any;
   /**
    * the name of the database
    */
   name(): string;
   /**
    * the type of storage used by the database; may be specified upon creation, but not thereafter; defaults to SQLite
    */
   storeType(): any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A named piece of data, residing in a record
  */
 export interface Field {
   /**
    * the unique id of the field
    */
   id(): number;
   /**
    * the name of the field
    */
   name(): string;
   /**
    * the value of the field
    */
   value(): any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A collection of fields, residing in a database
  */
 export interface Record {
   /**
    * the unique id of the record
    */
   id(): number;
   /**
    * the name of the record, equivalent to the value of the field named "name"
    */
   name(): string;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 export interface PrintSettings {
   /**
    * the number of copies of a document to be printed
    */
   copies(): number;
   /**
    * Should printed copies be collated?
    */
   collating(): boolean;
   /**
    * the first page of the document to be printed
    */
   startingPage(): number;
   /**
    * the last page of the document to be printed
    */
   endingPage(): number;
   /**
    * number of logical pages laid across a physical page
    */
   pagesAcross(): number;
   /**
    * number of logical pages laid out down a physical page
    */
   pagesDown(): number;
   /**
    * the time at which the desktop printer should print the document
    */
   requestedPrintTime(): any;
   /**
    * how errors are handled
    */
   errorHandling(): any;
   /**
    * for fax number
    */
   faxNumber(): string;
   /**
    * for target printer
    */
   targetPrinter(): string;
 }
    
    // CLass Extension
 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * The Database Events program
  */
 export interface Application {
   /**
    * the time in seconds the application will idle before quitting; if set to zero, idle time will not cause the application to quit
    */
   quitDelay(): any;
 }
    
    // Records

    // Function options
    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface CloseOptionalParameter {
      /**
       * Specifies whether changes should be saved before closing.
       */
      saving?: any;
      /**
       * The file in which to save the object.
       */
      savingIn?: any;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface CountOptionalParameter {
      /**
       * The class of objects to be counted.
       */
      each?: any;
    }


    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface DuplicateOptionalParameter {
      /**
       * The location for the new object(s).
       */
      to?: any;
      /**
       * Properties to be set in the new duplicated object(s).
       */
      withProperties?: any;
    }



    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface MakeOptionalParameter {
      /**
       * The class of the new object.
       */
      new: any;
      /**
       * The location at which to insert the object.
       */
      at?: any;
      /**
       * The initial data for the object.
       */
      withData?: any;
      /**
       * The initial values for properties of the object.
       */
      withProperties?: any;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface MoveOptionalParameter {
      /**
       * The new location for the object(s).
       */
      to: any;
    }


    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface PrintOptionalParameter {
      /**
       * Should the application show the Print dialog?
       */
      printDialog?: boolean;
      /**
       * the print settings
       */
      withProperties?: any;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface QuitOptionalParameter {
      /**
       * Specifies whether changes should be saved before quitting.
       */
      saving?: any;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface SaveOptionalParameter {
      /**
       * The file type in which to save the data.
       */
      as?: string;
      /**
       * The file in which to save the object.
       */
      in?: any;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface SetOptionalParameter {
      /**
       * The new value.
       */
      to: any;
    }

}
export interface DatabaseEvents extends DatabaseEvents.Application {
    // Functions

     /**
      * Close an object.
      * @param directParameter the object for the command
      * @param option
      * 
      */
     close(directParameter: any, option?: DatabaseEvents.CloseOptionalParameter): void;

     /**
      * Return the number of elements of a particular class within an object.
      * @param directParameter the object for the command
      * @param option
      * @return undefined
      */
     count(directParameter: any, option?: DatabaseEvents.CountOptionalParameter): number;

     /**
      * Delete an object.
      * @param directParameter the object for the command
      * 
      */
     delete(directParameter: any, ): void;

     /**
      * Copy object(s) and put the copies at a new location.
      * @param directParameter the object for the command
      * @param option
      * 
      */
     duplicate(directParameter: any, option?: DatabaseEvents.DuplicateOptionalParameter): void;

     /**
      * Verify if an object exists.
      * @param directParameter the object for the command
      * @return undefined
      */
     exists(directParameter: any, ): boolean;

     /**
      * Get the data for an object.
      * @param directParameter the object for the command
      * @return undefined
      */
     get(directParameter: any, ): any;

     /**
      * Make a new object.

      * @param option
      * @return undefined
      */
     make(option?: DatabaseEvents.MakeOptionalParameter): any;

     /**
      * Move object(s) to a new location.
      * @param directParameter the object for the command
      * @param option
      * 
      */
     move(directParameter: any, option?: DatabaseEvents.MoveOptionalParameter): void;

     /**
      * Open an object.
      * @param directParameter The file(s) to be opened.
      * @return undefined
      */
     open(directParameter: any, ): DatabaseEvents.Document;

     /**
      * Print an object.
      * @param directParameter The file(s) or document(s) to be printed.
      * @param option
      * 
      */
     print(directParameter: any, option?: DatabaseEvents.PrintOptionalParameter): void;

     /**
      * Quit an application.

      * @param option
      * 
      */
     quit(option?: DatabaseEvents.QuitOptionalParameter): void;

     /**
      * Save an object.
      * @param directParameter the object for the command
      * @param option
      * 
      */
     save(directParameter: any, option?: DatabaseEvents.SaveOptionalParameter): void;

     /**
      * Set an object's data.
      * @param directParameter the object for the command
      * @param option
      * 
      */
     set(directParameter: any, option?: DatabaseEvents.SetOptionalParameter): void;
}
