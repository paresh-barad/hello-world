pipeline {

    agent any
    stages {
        stage('Docker Build') {
            steps {
                sh "docker build -t pareshbarad1992/node-app:${env.BUILD_NUMBER} ."
            }
        }
        stage('Docker Push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
                    sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPassword}"
                    sh "docker push pareshbarad1992/node-app:${env.BUILD_NUMBER}"
                }
            }
        }
        stage('Docker Remove Image') {
            steps {
                sh "docker rmi pareshbarad1992/node-app:${env.BUILD_NUMBER}"
            }
        }
        
        stage('Apply Kubernetes Files') {
        steps {
            withKubeConfig([credentialsId: '5a9436f4-55b5-4c0d-aeda-11819ce8afe2']) {
                // sh 'cat deployment.yaml | sed "s/{{BUILD_NUMBER}}/$BUILD_NUMBER/g"  | kubectl apply -f -'
                // sh "sed 's/{{BUILD_NUMBER}}/${env.BUILD_NUMBER}/g' deployment.yml > ${env.BUILD_NUMBER}_deployment.yml  | kubectl apply -f ${env.BUILD_NUMBER}_deployment.yml"
                // sh 'kubectl apply -f 44_deployment.yml'
                sh 'kubectl apply -f ./service.yml'
            }
        }
  }

    }
        post {
            always {
                sh 'docker logout'
            }
    }
}
