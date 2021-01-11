<template>
    <v-main>
        <v-toolbar fixed dense flat>
            <v-spacer></v-spacer>
            <div class="text-center">
                <v-chip small color="info" dense label class="ma-2"
                    >Stitek 1</v-chip
                >
                <v-chip small color="green" dense label class="ma-2"
                    >Stitek 2</v-chip
                >
                <v-chip small color="warning" dense label class="ma-2"
                    >Stitek 3</v-chip
                >
                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <v-icon v-on="on" @click="OpenDialogForNewTag()">
                            mdi-plus
                        </v-icon>
                    </template>
                    <span>Nový štítek</span>
                </v-tooltip>
            </div>
        </v-toolbar>
    </v-main>
</template>
