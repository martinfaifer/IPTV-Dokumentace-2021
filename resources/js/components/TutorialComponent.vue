<template>
    <v-main>
        <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" dark v-bind="attrs" v-on="on">
                        Open Dialog
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title>
                        <span class="headline">Ukázka systému</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row> </v-row>
                            <v-stepper class="mt-10">
                                <v-stepper-header>
                                    <v-stepper-step step="1">
                                        Ad unit details
                                    </v-stepper-step>

                                    <v-divider></v-divider>

                                    <v-stepper-step step="2">
                                        Ad sizes
                                    </v-stepper-step>

                                    <v-divider></v-divider>

                                    <v-stepper-step step="3">
                                        Ad templates
                                    </v-stepper-step>
                                </v-stepper-header>
                            </v-stepper>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="dialog = false"
                        >
                            Zavřít
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </v-main>
</template>
<script>
export default {
    data: () => ({
        dialog: false
    })
};
</script>
