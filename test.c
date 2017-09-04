void main(){
	int num;
	int p=0;
  printf("Enter number:\n");
  scanf("%d",&num);
  for(int i=2;i<=num/2;i++){
  	if(num%i==0){
  		p=1;
  		break;
  	}
  	
  }
  if(p==1){
  	printf("Not Prime\n");
  }
  else{
  	printf("Prime Number");
  }
}
